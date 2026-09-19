import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ki8-vs-ts.css';
import '../../css/y/y7ehahefr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvA928dIc"><g class="aql7dnt-u"><path class="ki8-vs-ts"/><path class="y7ehahefr"/></g></mask></defs><path mask="url(#SVGvA928dIc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:power-supply-one"} {...others} />);
}

export default Component;
