import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs3ip1jeq.css';
import '../../css/n/nnvzu8bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs3ip1jeq"/><path class="nnvzu8bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fast-food-french-fries-bold"} {...others} />);
}

export default Component;
