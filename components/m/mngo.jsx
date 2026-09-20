import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgybm3bkh.css';
import '../../css/r/r01nltb0z.css';
import '../../css/j/jo8dh-bft.css';
import '../../css/r/rds2ovoio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgybm3bkh"/><path class="r01nltb0z"/><path class="jo8dh-bft"/><path class="rds2ovoio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mngo"} {...others} />);
}

export default Component;
