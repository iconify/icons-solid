import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/syz06951z.css';
import '../../css/e/emweqrb5v.css';
import '../../css/f/fj997wbqd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAAmMBe1a"><g class="aql7dnt-u"><path class="syz06951z"/><path class="emweqrb5v"/><path class="fj997wbqd"/></g></mask></defs><path mask="url(#SVGAAmMBe1a)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:invalid-files"} {...others} />);
}

export default Component;
