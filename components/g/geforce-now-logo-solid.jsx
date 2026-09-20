import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adw_cvhpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="adw_cvhpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:geforce-now-logo-solid"} {...others} />);
}

export default Component;
