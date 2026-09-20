import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb1lu2blg.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/umy13yz7p.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGIsKoDbZJ" class="jb1lu2blg"/></defs><g class="n1mjunbsu"><path class="umy13yz7p"/><use href="#SVGIsKoDbZJ"/></g><use href="#SVGIsKoDbZJ" class="ij2x_72vy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sake"} {...others} />);
}

export default Component;
