import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jnb6jybjq.css';
import '../../css/e/e8d1dpblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG92SymFYr"><g class="wwvp95byt"><path class="jnb6jybjq"/><path class="e8d1dpblu"/></g></mask></defs><path mask="url(#SVG92SymFYr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:doc-success"} {...others} />);
}

export default Component;
