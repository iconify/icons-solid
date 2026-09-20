import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5lgt4bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5lgt4bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:audio-file-bold"} {...others} />);
}

export default Component;
