import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ebl78obby.css';
import '../../css/u/u0zcdxb8y.css';
import '../../css/o/odgjuccph.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjOy5gcWI"><g class="ufeehvblu"><path class="ebl78obby"/><path class="u0zcdxb8y"/><path class="odgjuccph"/></g></mask></defs><path mask="url(#SVGjOy5gcWI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:consume"} {...others} />);
}

export default Component;
