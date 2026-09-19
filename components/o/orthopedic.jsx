import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qllazcb1e.css';
import '../../css/c/cl0c6rbvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDZfZBd9m"><g class="s9cl3zbei"><path clip-rule="evenodd" class="qllazcb1e"/><path class="cl0c6rbvl"/></g></mask></defs><path mask="url(#SVGDZfZBd9m)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:orthopedic"} {...others} />);
}

export default Component;
