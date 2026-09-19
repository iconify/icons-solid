import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zstbz94ff.css';
import '../../css/t/t4b6zqbbn.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="zstbz94ff"/><path class="t4b6zqbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:play-circle-stroke-12"} {...others} />);
}

export default Component;
