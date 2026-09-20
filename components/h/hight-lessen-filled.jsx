import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcq0wqbtr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kcq0wqbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:hight-lessen-filled"} {...others} />);
}

export default Component;
