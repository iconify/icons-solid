import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/h3wkvdb4j.css';
import '../../css/i/ibr52rbry.css';
import '../../css/x/xl-ah-bqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyabUidUK"><g class="s9cl3zbei"><path class="h3wkvdb4j"/><path class="ibr52rbry"/><path class="xl-ah-bqt"/></g></mask></defs><path mask="url(#SVGyabUidUK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:u-disk"} {...others} />);
}

export default Component;
