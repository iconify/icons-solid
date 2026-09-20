import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u68y6wqkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u68y6wqkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:vodafone-logo-block"} {...others} />);
}

export default Component;
