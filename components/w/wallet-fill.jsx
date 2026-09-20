import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubk5lxb9k.css';
import '../../css/l/l8nart8of.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubk5lxb9k"/><path clip-rule="evenodd" class="l8nart8of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:wallet-fill"} {...others} />);
}

export default Component;
