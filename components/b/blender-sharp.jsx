import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqp63x94z {
  fill: currentColor;
  d: path("M6 22v-4.75l1.85-2.1L7.225 11H3V3h7V2h4v1h3.975L16.15 15.15l1.85 2.1V22zm.925-13l-.6-4H5v4zm5.788 9.713Q13 18.425 13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19t.713-.288M9.7 14h4.6l1.35-9h-7.3z");
}
</style><path class="fqp63x94z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:blender-sharp"} {...others} />);
}

export default Component;
