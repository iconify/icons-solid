import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdhlu2f7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdhlu2f7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pregnancy-vagina"} {...others} />);
}

export default Component;
