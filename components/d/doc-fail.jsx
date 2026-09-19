import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jnb6jybjq.css';
import '../../css/b/bo1650c6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq5AkQcel"><g class="wwvp95byt"><path class="jnb6jybjq"/><path class="bo1650c6m"/></g></mask></defs><path mask="url(#SVGq5AkQcel)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:doc-fail"} {...others} />);
}

export default Component;
