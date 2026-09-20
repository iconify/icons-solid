import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjq-1sd1r.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fjq-1sd1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:device-database-encryption-1-remix"} {...others} />);
}

export default Component;
