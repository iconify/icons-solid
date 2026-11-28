import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoh9qo8fk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoh9qo8fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:clipboard-question"} {...others} />);
}

export default Component;
