import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d290v0skq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d290v0skq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:soundcloud-logo-block"} {...others} />);
}

export default Component;
