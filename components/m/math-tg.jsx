import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diz628b7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="diz628b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:math-tg"} {...others} />);
}

export default Component;
