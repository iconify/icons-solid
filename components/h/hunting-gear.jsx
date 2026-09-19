import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pfvw2bckb.css';
import '../../css/m/mzhpw8m7u.css';
import '../../css/r/ru8717ryg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAqI2ECPO"><g class="rohhhzb0l"><path class="pfvw2bckb"/><path class="mzhpw8m7u"/><path class="ru8717ryg"/></g></mask></defs><path mask="url(#SVGAqI2ECPO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hunting-gear"} {...others} />);
}

export default Component;
