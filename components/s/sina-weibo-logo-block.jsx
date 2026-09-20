import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfjgvi1zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bfjgvi1zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:sina-weibo-logo-block"} {...others} />);
}

export default Component;
