import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fapgedb6d.css';
import '../../css/d/d6rbg0-uq.css';
import '../../css/b/bexxgzmdx.css';
import '../../css/z/z4ecmib3n.css';
import '../../css/x/xho6-kbqm.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="fapgedb6d"/><path clip-rule="evenodd" class="d6rbg0-uq"/><path class="bexxgzmdx"/><path clip-rule="evenodd" class="z4ecmib3n"/><path clip-rule="evenodd" class="xho6-kbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:flork-in-love-hand-drawn"} {...others} />);
}

export default Component;
