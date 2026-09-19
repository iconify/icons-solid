import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ergqbgbqv.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ergqbgbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:speech-balloon-empty-small"} {...others} />);
}

export default Component;
