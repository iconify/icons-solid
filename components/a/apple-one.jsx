import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/ijwf7s55v.css';
import '../../css/o/otjh3yf2h.css';
import '../../css/j/je3cg7brs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKtHq3p8r"><g class="s9cl3zbei"><path clip-rule="evenodd" class="ijwf7s55v"/><path class="otjh3yf2h"/><path class="je3cg7brs"/></g></mask></defs><path mask="url(#SVGKtHq3p8r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:apple-one"} {...others} />);
}

export default Component;
