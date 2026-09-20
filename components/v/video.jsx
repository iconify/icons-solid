import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7ejmibhb.css';
import '../../css/z/z6i6gousf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7ejmibhb"/><path class="z6i6gousf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:video"} {...others} />);
}

export default Component;
