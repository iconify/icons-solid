import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/tu4qdd9vm.css';
import '../../css/u/uzdx58bvc.css';
import '../../css/b/b_ba31ccq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRifAjcps"><g class="rohhhzb0l"><path class="tu4qdd9vm"/><path class="uzdx58bvc"/><circle class="b_ba31ccq"/></g></mask></defs><path mask="url(#SVGRifAjcps)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sleep-two"} {...others} />);
}

export default Component;
