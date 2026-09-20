import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a66j17bbi.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/heeii1f4x.css';
import '../../css/n/nflhq8v3y.css';

const viewBox = {"width":256,"height":319};
const content = `<defs><path id="SVGCjwircEr" class="a66j17bbi"/></defs><mask id="SVGd4Xo1w9i" class="n1mjunbsu"><use href="#SVGCjwircEr"/></mask><use href="#SVGCjwircEr" class="heeii1f4x"/><path mask="url(#SVGd4Xo1w9i)" class="nflhq8v3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:storybook"} {...others} />);
}

export default Component;
