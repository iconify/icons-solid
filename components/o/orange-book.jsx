import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8a-spftx.css';
import '../../css/f/f--a68y4g.css';
import '../../css/g/g-vas9vud.css';
import '../../css/o/ogbi9fbdn.css';
import '../../css/a/ay8131wny.css';
import '../../css/p/pvt39jcep.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a8a-spftx"/><path class="f--a68y4g"/><path class="g-vas9vud"/><path class="ogbi9fbdn"/><circle class="ay8131wny"/><path class="pvt39jcep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orange-book"} {...others} />);
}

export default Component;
