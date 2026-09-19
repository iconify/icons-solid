import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o51294bng.css';
import '../../css/s/sey112v-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxuCMgbns"><g class="ufeehvblu"><path class="o51294bng"/><path class="sey112v-v"/></g></mask></defs><path mask="url(#SVGxuCMgbns)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:document-folder"} {...others} />);
}

export default Component;
