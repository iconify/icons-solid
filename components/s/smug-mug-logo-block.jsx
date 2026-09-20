import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoj8bc9hp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eoj8bc9hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:smug-mug-logo-block"} {...others} />);
}

export default Component;
