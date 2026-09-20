import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlvvtbc1o.css';
import '../../css/n/nvm0pnlsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hlvvtbc1o"/><path class="nvm0pnlsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article"} {...others} />);
}

export default Component;
