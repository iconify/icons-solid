import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ectqhdcsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ectqhdcsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:empty-set"} {...others} />);
}

export default Component;
