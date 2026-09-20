import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwh64cc8r.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="zwh64cc8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:keyhole-lock-circle-remix"} {...others} />);
}

export default Component;
