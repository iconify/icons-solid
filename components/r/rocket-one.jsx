import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dyaf68bbe.css';
import '../../css/d/d-h0y4b8w.css';
import '../../css/s/suau6bcmm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7Uo8Ub9N"><g class="rohhhzb0l"><path class="dyaf68bbe"/><circle class="d-h0y4b8w"/><path class="suau6bcmm"/></g></mask></defs><path mask="url(#SVG7Uo8Ub9N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rocket-one"} {...others} />);
}

export default Component;
