import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjug9ybmp.css';
import '../../css/e/ecuj1-btq.css';
import '../../css/h/hk8vu0bed.css';
import '../../css/u/ur4hs2dgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yjug9ybmp"/><circle class="ecuj1-btq"/><circle class="hk8vu0bed"/><circle class="ur4hs2dgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-more"} {...others} />);
}

export default Component;
