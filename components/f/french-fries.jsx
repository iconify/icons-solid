import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pb418gb3z.css';
import '../../css/q/q-c3nrjwl.css';
import '../../css/k/k7vaebzuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUrLoXbLe"><g class="s9cl3zbei"><path class="pb418gb3z"/><path class="q-c3nrjwl"/><ellipse class="k7vaebzuk"/></g></mask></defs><path mask="url(#SVGUrLoXbLe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:french-fries"} {...others} />);
}

export default Component;
