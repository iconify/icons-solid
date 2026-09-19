import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8zourksb.css';
import '../../css/d/d-pin6bmy.css';
import '../../css/a/ak091jzgn.css';
import '../../css/a/aj4bwh58v.css';
import '../../css/n/n1mjunbsu.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGhmywkeTe"><path class="b8zourksb"/></clipPath><path id="SVGh7EF5c2g" class="d-pin6bmy"/></defs><g clip-path="url(#SVGhmywkeTe)" transform="scale(.057)"><path class="ak091jzgn"/><path class="aj4bwh58v"/><use width="13500" height="9000" x="2" y="2" href="#SVGh7EF5c2g" transform="scale(750)" class="n1mjunbsu"/><use width="13500" height="9000" x="3" y="3" href="#SVGh7EF5c2g" transform="scale(1000)" class="n1mjunbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cw-1x1"} {...others} />);
}

export default Component;
