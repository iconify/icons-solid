import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cog56gb0n.css';
import '../../css/v/v9lk8ib_s.css';
import '../../css/h/hf1-0pb9l.css';
import '../../css/w/wtahhnbyg.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="cog56gb0n"/><circle class="v9lk8ib_s"/><circle class="hf1-0pb9l"/><circle class="wtahhnbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:record-button"} {...others} />);
}

export default Component;
