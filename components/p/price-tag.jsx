import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agh5kobes.css';
import '../../css/f/fe-l95ejb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agh5kobes"/><path class="fe-l95ejb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:price-tag"} {...others} />);
}

export default Component;
