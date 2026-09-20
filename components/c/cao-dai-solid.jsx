import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgdli1bua.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pgdli1bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cao-dai-solid"} {...others} />);
}

export default Component;
