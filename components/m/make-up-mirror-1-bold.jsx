import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-bzdbb5h.css';
import '../../css/i/ij-ynac5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-bzdbb5h"/><path class="ij-ynac5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:make-up-mirror-1-bold"} {...others} />);
}

export default Component;
