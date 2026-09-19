import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/el01ndb8a.css';
import '../../css/x/x6gu8c48n.css';
import '../../css/h/hiqj6hy2u.css';
import '../../css/c/cek1pc4bc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGx49OhRWb"><g class="s9cl3zbei"><path class="el01ndb8a"/><path class="x6gu8c48n"/><circle class="hiqj6hy2u"/><path class="cek1pc4bc"/></g></mask></defs><path mask="url(#SVGx49OhRWb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-date"} {...others} />);
}

export default Component;
