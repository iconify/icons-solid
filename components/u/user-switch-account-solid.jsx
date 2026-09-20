import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6u5tubte.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="z6u5tubte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-switch-account-solid"} {...others} />);
}

export default Component;
