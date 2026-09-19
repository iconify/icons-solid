import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z776msg2f.css';
import '../../css/l/l9hzahg6k.css';
import '../../css/z/z4h5k8b8j.css';
import '../../css/y/yhpinr7sk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh3RzhbSK"><g class="ft5dv1b6b"><ellipse class="z776msg2f"/><circle class="l9hzahg6k"/><path class="z4h5k8b8j"/><path class="yhpinr7sk"/></g></mask></defs><path mask="url(#SVGh3RzhbSK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:golf-course"} {...others} />);
}

export default Component;
