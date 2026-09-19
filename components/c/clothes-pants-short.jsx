import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y7hdjob7g.css';
import '../../css/e/ejjqbybko.css';
import '../../css/q/qgbesdgku.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl9CYocit"><g class="wwvp95byt"><path class="y7hdjob7g"/><path class="ejjqbybko"/><path class="qgbesdgku"/></g></mask></defs><path mask="url(#SVGl9CYocit)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clothes-pants-short"} {...others} />);
}

export default Component;
