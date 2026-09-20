import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia6vczrdf.css';
import '../../css/t/t844gqbkh.css';
import '../../css/z/zii0e-b-x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ia6vczrdf"/><path class="t844gqbkh"/><path class="zii0e-b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-ink-pen"} {...others} />);
}

export default Component;
