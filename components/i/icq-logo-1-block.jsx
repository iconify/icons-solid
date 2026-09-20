import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjnvnmevq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hjnvnmevq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:icq-logo-1-block"} {...others} />);
}

export default Component;
