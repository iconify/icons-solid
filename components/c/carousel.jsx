import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/ppec674qb.css';
import '../../css/v/v968wactg.css';
import '../../css/e/e146jsbwe.css';
import '../../css/j/jfq0frq6e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8qUaQbUD"><g class="ufeehvblu"><path class="ppec674qb"/><path class="v968wactg"/><path class="e146jsbwe"/><path class="jfq0frq6e"/></g></mask></defs><path mask="url(#SVG8qUaQbUD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:carousel"} {...others} />);
}

export default Component;
