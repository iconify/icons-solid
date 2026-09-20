import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5_mrgt4f.css';
import '../../css/f/f86ggwbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5_mrgt4f"/><path class="f86ggwbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bsgg"} {...others} />);
}

export default Component;
