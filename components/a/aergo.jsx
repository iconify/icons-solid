import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi609bcuk.css';
import '../../css/s/s-xq_4b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi609bcuk"/><path class="s-xq_4b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aergo"} {...others} />);
}

export default Component;
