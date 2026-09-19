import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gbh1v2c4l.css';
import '../../css/c/cjud57b0f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyhYEWbVW"><g class="rohhhzb0l"><path class="gbh1v2c4l"/><path class="cjud57b0f"/></g></mask></defs><path mask="url(#SVGyhYEWbVW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:compass-one"} {...others} />);
}

export default Component;
