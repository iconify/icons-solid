import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6xnufbol.css';
import '../../css/j/jtlquzbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6xnufbol duoicon-primary-layer"/><path class="duoicon-secondary-layer jtlquzbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:candle"} {...others} />);
}

export default Component;
